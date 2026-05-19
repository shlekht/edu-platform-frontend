import styles from "./Tables.module.css";

export const PluralTable = () => {
  return (
    <div>
    <table border="1" className={styles.table}>
  <tr>
    <th>Последний звук слова</th>
    <th>Окончания</th>
    <th>Пример</th>
  </tr>

  <tr>
    <td>После всех гласных и сонорных "р, у, й"</td>
    <td>лар - лер</td>
    <td>Аналар - матери</td>
  </tr>

  <tr>
    <td>После звонких "з, ж" и сонорных "л, м, н, ң"</td>
    <td>дар - дер</td>
    <td>Шалдар - старики</td>
  </tr>

  <tr>
    <td>После глухих и звонких "б, в, г, д"</td>
    <td>тар - тер</td>
    <td>Қарындастар - сестренки</td>
  </tr>

  
</table>
</div>
  );
};