import { ref } from "vue";
export  let theme=ref("")
export function setTheme(value:string){
    if(value==="dark"){
        document.body.setAttribute('arco-theme', 'dark');
    }
    else{
        document.body.removeAttribute('arco-theme');
    }
    theme.value=value
    localStorage.setItem("theme",theme.value)
}
export function loadTheme(){
    const localTheme=localStorage.getItem("theme")
    if(localTheme){
        theme.value=localTheme;
        setTheme(localTheme)
    }
}
