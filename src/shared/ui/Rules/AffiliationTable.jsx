import styles from "./Tables.module.css";

export const AffiliationTable = () => {
  return (
    <div>
    <table border="1" className = {styles.table}>
    <thead>
        <tr>
            <th rowspan="2">Лицо</th>
            <th rowspan="2">Местоимение</th>
            <th colspan="2">Окончания принадлежности</th>
            <th rowspan="2">Местоимение</th>
            <th rowspan="2">Лицо</th>
        </tr>
        <tr>
            <th>ед. числа</th>
            <th>мн. числа</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="center">I</td>
            <td>Мой<br/><span class="bold">Менің</span></td>
            <td>м – ым – ім</td>
            <td>Мн.ч.+<br/>мыз – міз,<br/>ымыз- іміз</td>
            <td>Наш<br/><span class="bold">Біздің</span></td>
            <td class="center">I</td>
        </tr>
        <tr>
            <td class="center">II</td>
            <td>Твой<br/><span class="bold">Сенің</span></td>
            <td>ң – ың – ің</td>
            <td>Мн. ч.<br/>+ ың – ің</td>
            <td>Ваш<br/><span class="bold">Сендердің</span></td>
            <td class="center">II</td>
        </tr>
        <tr>
            <td class="center">II</td>
            <td>Ваш<br/><span class="bold">Сіздің</span></td>
            <td>ңыз – ыңыз<br/>ңіз – іңіз</td>
            <td>Мн.ч. +<br/>ыңыз – іңіз</td>
            <td>Ваш<br/><span class="bold">Сіздердің</span></td>
            <td class="center">II</td>
        </tr>
        <tr>
            <td class="center">III</td>
            <td>Его, Её<br/><span class="bold">Оның</span></td>
            <td>ы – і<br/>сы – сі</td>
            <td>Мн.ч. +<br/>ы – і</td>
            <td>Их<br/><span class="bold">Олардың</span></td>
            <td class="center">III</td>
        </tr>
    </tbody>
</table>
</div>
  );
};