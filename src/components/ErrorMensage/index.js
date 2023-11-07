export async function processResponse(response) {
  try {
    if (!response.ok) {
      const data = await response.json();
      if (data.detail && data.detail.length > 0) {
        return data.detail[0].msg;
      } else {
        return `Erro ${response.status}`;
      }
    } else {
      return null;
    }
  } catch (error) {
    return error.message;
  }
}
