export async function apiRequest<T>(
  url: string,
  method: string = "GET",
  body?: object
): Promise<T> {
  try {
    const options: RequestInit = { method };

    if (body) {
      options.headers = { "Content-Type": "application/json" };
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (!response.ok) throw new Error(`Failed to ${method.toLowerCase()} task`);

    return await response.json();
  } catch (e) {
    throw e instanceof Error ? e : new Error("An error occurred");
  }
}
