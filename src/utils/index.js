
// utility functions //
export function extractColumnsFromTable(tableData) {
  return Object.keys(tableData.reduce((result, obj) => { return Object.assign(result, obj); }, {}))
}
// mock data for tests //
export const mock_data = [
  {"id":"1","firstName":"Linnie","lastName":"Gottlieb","gradeLevel":36,"nationality":"Slovakia (Slovak Republic)","ellStatus":"ellStatus 1","initialDateOfTesting":"2019-01-11T19:35:45.580Z","race":"race 1","homeLanguage":"homeLanguage 1"},
  {"id":"2","firstName":"Jennings","lastName":"Dibbert","gradeLevel":3,"nationality":"Thailand","ellStatus":"ellStatus 2","initialDateOfTesting":"2019-02-19T02:41:03.976Z","race":"race 2","homeLanguage":"homeLanguage 2"},
  {"id":"3","firstName":"Mateo","lastName":"Hudson","gradeLevel":62,"nationality":"Malaysia","ellStatus":"ellStatus 3","initialDateOfTesting":"2018-08-03T18:42:02.303Z","race":"race 3","homeLanguage":"homeLanguage 3"},
  {"id":"4","firstName":"Robyn","lastName":"Brekke","gradeLevel":64,"nationality":"Heard Island and McDonald Islands","ellStatus":"ellStatus 4","initialDateOfTesting":"2018-10-28T03:35:08.536Z","race":"race 4","homeLanguage":"homeLanguage 4"}
]
