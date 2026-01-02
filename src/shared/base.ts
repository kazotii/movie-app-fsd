export async function tmdbRequest<T>(endpoint: string): Promise<T> {
  const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`server is bad sorry`);
  }

  return await response.json();
}