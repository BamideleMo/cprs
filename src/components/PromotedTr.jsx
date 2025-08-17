function PromotedTr(props) {
  return (
    <tr class="border-b border-dashed  border-black">
      <td colSpan={3} class="leading-snug text-gray-900">
        <a href={props.link} class="block py-4 hover:underline">
          <span class="text-red-600 font-bold">{props.topic}</span>
          <br />
          <span>
            {props.text}
          </span>
        </a>
      </td>
    </tr>
  );
}

export default PromotedTr;
