import { SectionHeader } from '../ui/SectionHeader';
import {SkillGraph} from '../ui/SkillGraph';
import { SkillList } from '../ui/SkillList';

export default function SkillsSection() {
  return (
    <section id = "skill" className = {`w-[90%] mt-[5vw] ml-[5vw] px-6`}>
    <SectionHeader title="Skills" subTitle="特技/できること" />
    <div className="flex items-start mt-[4vw]">
        <SkillGraph/>
        <SkillList />
    </div>
    </section>
  );
};