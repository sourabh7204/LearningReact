function printHello() {
  return console.log("Hello!");
}

function handleHover() {
  return console.log("Hover over me!");
}

function dblClick() {
  return console.log("Double Clicked me!");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click me!</button>
      <p onMouseOver={handleHover}>
        When you use our services, you’re trusting us with your information. We
        understand this is a big responsibility and work hard to protect your
        information and put you in control. This Privacy Policy is meant to help
        you understand what information we collect, why we collect it, and how
        you can update, manage, export, and delete your information.
      </p>
      <button onDoubleClick={dblClick}>Click me!</button>
    </div>
  );
}
