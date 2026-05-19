import { useState } from "react";

import { Button } from "../../shared/ui/Button/Button";
import { LettersTable } from "../../shared/ui/Rules/LettersTable";
import { PluralTable } from "../../shared/ui/Rules/PluralTable";
import { CasesTable } from "../../shared/ui/Rules/CasesTable";
import { AffiliationTable } from "../../shared/ui/Rules/AffiliationTable";
import styles from "./RulesWindow.module.css";

const tabs = [
  "Буквы и звуки",
  "Множественное число",
  "Падежи",
  "Личные окончания",
];

const tabContent = [
  <LettersTable/>,
  <PluralTable/>,
  <CasesTable/>,
  <AffiliationTable/>,
];

const RulesWindow = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.window}>
      <div className={styles.content}>
        {tabContent[activeTab]}
      </div>

      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <Button
            key={tab}
            onClick={() => setActiveTab(index)}
            className={`
              ${activeTab === index ? styles.activeTab : ""}
            `}
          >
            {tab}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default RulesWindow;