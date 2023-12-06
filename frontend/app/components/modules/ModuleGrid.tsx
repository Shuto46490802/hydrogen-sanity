// types
import {ModulesType} from '~/types';
// comps
import Module from './Module';

type Props = {
  modules: ModulesType[];
};

const ModuleGrid = ({modules}: Props) => {
  return (
    <>
      {modules.map((module, index) => (
        <Module module={module} key={index}></Module>
      ))}
    </>
  );
};

export default ModuleGrid;
