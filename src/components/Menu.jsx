import { A } from "@solidjs/router";

function Menu(props) {
  return (
    <ul class="text-base lg:text-sm mt-6 flex flex-col px-6 lg:px-0 space-y-6 lg:space-y-0 lg:flex-row lg:space-x-12">
      <li>
        <A href="/about-cprs" class="border-b border-green-600 hover:border-dotted">
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
