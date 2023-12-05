// types
import {SectionsType} from '~/types';
// comps
import Section from './Section';

type Props = {
  sections: SectionsType[];
};

const SectionGrid = ({sections}: Props) => {
  return (
    <>
      {sections.map((section, index) => (
        <Section section={section} key={index}></Section>
      ))}
    </>
  );
};

export default SectionGrid;
