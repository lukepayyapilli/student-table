
class tableService {

  static async loadTableData(url, method) {
    const call = await fetch(url, {
      method: method,
      headers: {'Content-Type': 'application/json'}
    })
    const data = await call.json();
    return data;
  }
}

export default tableService;
