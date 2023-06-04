import axios, { AxiosError } from 'axios';
import { AxiosResponse } from 'axios';
import * as React from 'react';

type Callbacks = {
	onSuccess?: () => void;
	onError?: (error: string) => void;
};

/**
 * React hook for making HTTP POST requests and managing the state of the request.
 *
 * @param {string} url - The URL to which the POST request should be made.
 * @param {object} callbacks - Optional object containing callback functions for handling request success and error.
 * @returns {object} - An object containing the state and functionality related to the mutation request.
 *   - isLoading: A boolean indicating whether the request is currently loading.
 *   - mutate: A function to trigger the mutation request.
 *   - error: The error object, if an error occurred during the request.
 *   - isError: A boolean indicating whether an error occurred during the request.
 *   - data: The response data from the request.
 *   - isSuccess: A boolean indicating whether the request was successful.
 */
const useMutation = <T>(url: string, callbacks: Callbacks) => {
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState<null | unknown>(null);
	const [data, setData] = React.useState<T | null>(null);
	const [isSuccess, setIsSuccess] = React.useState(false);

	React.useEffect(() => {
		return () => {
			axios.CancelToken.source().cancel('Request cancelled due to component unmount');
		};
	}, []);

	const mutate = async (data: unknown) => {
		try {
			setError(null);
			setIsLoading(true);

			const response: AxiosResponse<T> = await axios.post(url, data);

			setData(response.data);
			setIsSuccess(true);

			if (callbacks.onSuccess) {
				callbacks.onSuccess();
			}
		} catch (error: unknown) {
			const errorResponse = error as AxiosError;
			const errorMessage = errorResponse?.message || 'An error occurred';

			setError(errorMessage);
			setIsSuccess(false);

			if (callbacks.onError) {
				callbacks.onError(errorMessage);
			}
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, mutate, error, isError: error !== null, data, isSuccess };
};

export { useMutation };
