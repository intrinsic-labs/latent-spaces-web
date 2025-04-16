import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import SectionContent from '../ui/SectionContent';
import CodeChip from './CodeChip';
import FeatureItem from './FeatureItem';
import { iosFeatures, webFeatures, openLoomFeatures } from '@/lib/fundraisingData';
import { discordInvite } from '@/lib/links';

export default function FeatureList() {
  return (
    <div className="px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
      >
        <SectionTitle>Planned Features</SectionTitle>
        <SectionContent>
          The following features are planned for the public beta release. These will be marked completed as they are implemented.
          Think something is missing? <CodeChip href={discordInvite}>Join the Discord</CodeChip> and let's talk!
        </SectionContent>
      </motion.div>

      <div className="my-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <CodeChip size="large">iOS App Improvements</CodeChip>
        </motion.div>
        <ul className="my-8">
          {iosFeatures.map((feature, index) => (
            <FeatureItem
              key={feature.id}
              text={feature.text}
              funded={feature.funded}
              delay={0.1 + index * 0.005}
            />
          ))}
        </ul>
      </div>

      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <CodeChip size="large">Web App Beta</CodeChip>
        </motion.div>
        <ul className="my-8">
          {webFeatures.map((feature, index) => (
            <FeatureItem
              key={feature.id}
              text={feature.text}
              funded={feature.funded}
              delay={0.1 + index * 0.005}
            />
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <CodeChip size="large">OpenLoom Protocol Upgrades</CodeChip>
        </motion.div>
        <ul className="my-8">
          {openLoomFeatures.map((feature, index) => (
            <FeatureItem
              key={feature.id}
              text={feature.text}
              funded={feature.funded}
              delay={0.1 + index * 0.005}
            />
          ))}
        </ul>
      </div>
    </div>
  );
} 