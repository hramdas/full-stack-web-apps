import { TestListItem } from "./TestListItem"
const testData = ["Math", "English", "History", "Economics"]

export const TestList = () => {
  return (
    <div>
      <h2>Test List</h2>
      <TestListItem test={testData} />
    </div>
  )
}
