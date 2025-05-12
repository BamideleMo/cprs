function PromotedTr(props) {
  return (
    <tr class="border-b border-dashed border-purple-800 bg-green-50">
      <td colSpan={2} class="leading-snug text-gray-600">
        <a href={props.link} class="block p-2 md:p-3 pb-4 hover:underline">
          <span class="text-red-600">{props.topic}</span>
          <br />
          <span>
            {props.text}&nbsp;
            <span class="text-purple-600">Click here</span>.
          </span>
        </a>
      </td>
    </tr>
  );
}

export default PromotedTr;
