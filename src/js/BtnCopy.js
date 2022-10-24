import swal from "sweetalert";

export default function copyToClip(str) {
  function listener(e) {
    e.preventDefault();
    e.clipboardData.setData('text/plain', str);
  }
  document.addEventListener('copy', listener);
  document.execCommand('copy');
  document.removeEventListener('copy', listener);
  swal("COPIADO COM SUCESSO!", {
    button: false,
    timer: 1000,
  });
}