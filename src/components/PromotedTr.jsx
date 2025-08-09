function PromotedTr(props) {
  return (
    <tr class="border-b border-dashed border-black bg-yellow-100">
      <td colSpan={3} class="leading-snug text-gray-900">
        <a href={props.link} class="block p-2 md:p-4 hover:underline">
          <span class="text-red-600">{props.topic}</span>
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
