import {SectionsType} from '~/types';
import Section from './Section';

type Props = {
  sections: SectionsType[];
};

const SectionGrid = ({sections}: Props) => {
  return (
    <>
      {sections.map((section) => (
        <Section section={section}></Section>
      ))}
    </>
  );
};

export default SectionGrid;
