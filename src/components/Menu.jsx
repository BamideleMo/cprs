import { A } from "@solidjs/router";

function Menu(props) {
  return (
    <ul class="text-sm mt-6 flex space-x-12">
      <li>
        <A href="#" class="border-b border-green-600 hover:border-dotted">
          About CPRS
        </A>
      </li>
      <li>
        <A href="#" class="border-b border-green-600 hover:border-dotted">
          Programmes
        </A>
      </li>
      <li>
        <A href="#" class="border-b border-green-600 hover:border-dotted">
          Admissions
        </A>
      </li>
      <li>
        <A href="#" class="border-b border-green-600 hover:border-dotted">
          Tuition
        </A>
      </li>
      <li>
        <A href="#" class="border-b border-green-600 hover:border-dotted">
          Contact Us
        </A>
      </li>
    </ul>
  );
}

export default Menu;
