
class tableService {

  static async loadTableData(url, method, data, headers) {
    const call = await fetch(url, {
      method: method,
      data: data,
      headers: headers || {'Content-Type': 'application/json'}
    })
    const result = await call.json();
    return result;
  }
}

export default tableService;
