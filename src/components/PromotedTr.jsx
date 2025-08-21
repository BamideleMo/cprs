function PromotedTr(props) {
  return (
    <tr class="border-t border-dashed  border-black">
      <td colSpan={3} class="leading-snug text-gray-700">
        <a href={props.link} class="block py-5 hover:underline">
          <span class="text-base text-red-600">{props.topic}</span>
          <br />
          <span class="text-sm">
            {props.text}
          </span>
        </a>
      </td>
    </tr>
  );
}

export default PromotedTr;
