// SHH!
import config from "./config/config.json";
const WORD_1 = "CODE";
const WORD_2 = "PUMPKIN";
let keys = "";
window.addEventListener("keypress", function (e) {
  // console.log("keycode", e.keyCode)
  keys += e.key;
  //console.log(keys);
  if (keys.includes(WORD_1)) {
    // console.log("");
    document.title = "E: " + WORD_2;
    setTimeout(() => {
      document.title = config.title;
    }, 10500);
  } else if (keys.includes(WORD_1) && keys.includes(WORD_2)) {
    window["aGFsb3dlZW4"](WORD_2);
  }
});
window["aGFsb3dlZW4"] = (code) => {
  if (code === WORD_2) {
    document.title = "E: Hacker mode";
    window.activated = true;
    alert(`
    .,'
 .'\`.'
.' .'
_.ood0Pp._ ,'  \`.~ .q?00doo._
.od00Pd0000Pdb._. . _:db?000b?000bo.
.?000Pd0000PP?000PdbMb?000P??000b?0000b.
.d0000Pd0000P'  \`?0Pd000b?0'  \`?000b?0000b.
.d0000Pd0000?'     \`?d000b?'     \`?00b?0000b.
d00000Pd0000Pd0000Pd00000b?00000b?0000b?0000b
?00000b?0000b?0000b?b    dd00000Pd0000Pd0000P
\`?0000b?0000b?0000b?0b  dPd00000Pd0000Pd000P'
\`?0000b?0000b?0000b?0bd0Pd0000Pd0000Pd000P'
\`?000b?00bo.   \`?P'  \`?P'   .od0Pd000P'
\`~?00b?000bo._  .db.  _.od000Pd0P~'
\`~?0b?0b?000b?0Pd0Pd000PdP~'`)
    const old_inner = [];
    const items = Array.from(document.getElementsByClassName("get-hacked"));
    items.forEach((item, index) => {
      old_inner[index] = item.innerHTML;
      item.innerHTML = "HACKED";
    });

    let CHANCE = 0.003;
    setTimeout(() => {
      CHANCE = 0.5;
    }, 5000);
    const normal = [];
    const toggle = [
      "imp-text-color",
      "image-gradient",
      "section-background-color",
    ];
    toggle.forEach((item, index) => {
      const val = getComputedStyle(document.documentElement).getPropertyValue(
        "--" + item
      );
      normal[index] = val;
    });
    function zeroFill(width, number, pad = "0") {
      width -= number.toString().length;
      if (width > 0)
        return (
          new Array(width + (/\./.test(number) ? 2 : 1)).join(pad) + number
        );
      return number + "";
    }
    // let loop = true;
    const meta = document.querySelector("meta.theme-color");

    const inter = setInterval(() => {
      if (Math.random() > CHANCE) {
        console.log(
          "PASSWORD: %c" +
            btoa(
              (16777215 ** (Math.random() ** Math.PI))
                .toString()
                .split("=")
                .join("")
            ),
          "color: red;"
        );
        toggle.forEach((item, index) => {
          document.documentElement.style.setProperty(
            "--" + item,
            "#" + zeroFill(6, Math.floor(Math.random() * 16777215).toString(16))
          );
        });
        document.querySelectorAll("img").forEach((img) => {
          img.style.filter = `invert(${Math.round(Math.random() * 100)}%)`;
        });
        document.querySelectorAll("svg").forEach((img) => {
          img.style.filter = `invert(${Math.round(Math.random() * 100)}%)`;
        });
        document.body.style.filter = `invert(${Math.round(
          Math.random() * 100
        )})`;
        meta.setAttribute(
          "content",
          "#" + zeroFill(6, Math.floor(Math.random() * 16777215).toString(16))
        );
      } else {
        console.log(
          "PASSWORD: %c" +
            btoa(
              (Math.random() * 16777215)
                .toString()
                .split(".")[1]
                .split("=")
                .join("")
            ),
          "color: green;"
        );
        toggle.forEach((item, index) => {
          document.documentElement.style.setProperty(
            "--" + item,
            normal[index]
          );
        });
        items.forEach((item, index) => {
          item.innerHTML = old_inner[index];
        });
        document.querySelectorAll("img").forEach((img) => {
          img.style.removeProperty("filter");
        });
        document.querySelectorAll("svg").forEach((img) => {
          img.style.removeProperty("filter");
        });
        document.body.style.removeProperty("filter");
        clearInterval(inter);
        meta.setAttribute("content", "#fff");
        document.title = config.title;
    window.activated = false;
      }
    }, 50);
  } else {
    window.alert("Incorect Code");
  }
};
