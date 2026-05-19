import styles from "./Tables.module.css";

export const LettersTable = () => {
  return (
    <div>
    <table border="1" className={styles.table}>
  <tr>
    <td rowspan="2"><strong>Гласные</strong></td>
    <td><strong>Твердые</strong></td>
    <td>а</td>
    <td>о</td>
    <td>Ұ</td>
    <td>ы</td>
    <td rowspan="2">
      Могут быть твердыми и мягкими:<br/>
      у, и, ю, я
    </td>
    <td rowspan="2">
      употребляется в иноязычных словах:<br/>
      ё, э
    </td>
  </tr>

  <tr>
    <td><strong>Мягкие</strong></td>
    <td>ә, е</td>
    <td>ө</td>
    <td>Ү</td>
    <td>і</td>
  </tr>

  <tr>
    <td rowspan="3"><strong>Согласные</strong></td>
    <td><strong>Глухие</strong></td>
    <td colspan="4">
      к, қ, п, с, т, ф, х, ц, ч, ш, щ
    </td>
    <td rowspan="3"> </td>
    <td rowspan="3">
      в, ф, ц, ч, щ, ъ, ь
    </td>
  </tr>

  <tr>
    <td><strong>Звонкие</strong></td>
    <td colspan="4">
      б, в, г, ғ, д, ж, з, һ
    </td>
  </tr>

  <tr>
    <td><strong>Сонорные</strong></td>
    <td colspan="4">
      р, л, й, м, н, ң, у
    </td>
  </tr>
</table>
</div>
  );
};