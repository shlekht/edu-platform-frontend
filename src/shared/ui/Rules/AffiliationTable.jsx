import styles from "./Tables.module.css";

export const AffiliationTable = () => {
  return (
    <div>
    <table border="1" className = {styles.table}>
        
    <thead>
        <tr>
            <th rowSpan={2}>Лицо</th>
            <th rowSpan={2}>Местоимение</th>
            <th colSpan={2}>Окончания принадлежности</th>
            <th rowSpan={2}>Местоимение</th>
            <th rowSpan={2}>Лицо</th>
        </tr>
        <tr>
            <th>ед. числа</th>
            <th>мн. числа</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className={styles.center}>I</td>
            <td>Мой<br/><span className={styles.bold}>Менің</span></td>
            <td>м – ым – ім</td>
            <td>Мн.ч.+<br/>мыз – міз,<br/>ымыз- іміз</td>
            <td>Наш<br/><span className={styles.bold}>Біздің</span></td>
            <td className={styles.center}>I</td>
        </tr>
        <tr>
            <td className={styles.center}>II</td>
            <td>Твой<br/><span className={styles.bold}>Сенің</span></td>
            <td>ң – ың – ің</td>
            <td>Мн. ч.<br/>+ ың – ің</td>
            <td>Ваш<br/><span className={styles.bold}>Сендердің</span></td>
            <td className={styles.center}>II</td>
        </tr>
        <tr>
            <td className={styles.center}>II</td>
            <td>Ваш<br/><span className={styles.bold}>Сіздің</span></td>
            <td>ңыз – ыңыз<br/>ңіз – іңіз</td>
            <td>Мн.ч. +<br/>ыңыз – іңіз</td>
            <td>Ваш<br/><span className={styles.bold}>Сіздердің</span></td>
            <td className={styles.center}>II</td>
        </tr>
        <tr>
            <td className={styles.center}>III</td>
            <td>Его, Её<br/><span className={styles.bold}>Оның</span></td>
            <td>ы – і<br/>сы – сі</td>
            <td>Мн.ч. +<br/>ы – і</td>
            <td>Их<br/><span className={styles.bold}>Олардың</span></td>
            <td className={styles.center}>III</td>
        </tr>
    </tbody>
</table>
</div>
  );
};