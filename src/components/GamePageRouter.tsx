import { useParams } from 'react-router-dom';
import ProjectPage from '../pages/projects/ProjectPage';
import { getProjectPageConfig } from '../pages/projects/projectPageConfig';

function GamePageRouter() {
  const { gameId } = useParams<{ gameId: string }>();
  const config = getProjectPageConfig(gameId);

  if (!config) return <div>This page is currently in development.</div>;

  return <ProjectPage config={config} />;
}

export default GamePageRouter;
