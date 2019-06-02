
export function extractColumnsFromTable(tableData) {
  return Object.keys(tableData.reduce((result, obj) => { return Object.assign(result, obj); }, {}))
}
