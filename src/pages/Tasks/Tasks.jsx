import TasksRedux from "../../components/TasksRedux/TasksRedux";
import AppContainer from "../../components/AppContainer/AppContainer";
import DocumentTitle from "../../components/DocumentTitle";
const Tasks = () => {
  return (
    <>
      <DocumentTitle>Tasks</DocumentTitle>
      <AppContainer>
        <TasksRedux />
      </AppContainer>
    </>
  );
};
export default Tasks;
