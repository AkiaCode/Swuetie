import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
    const location = useLocation()
    // id 마다 데이터 보여주는 거 가리기
    const pathname = location.pathname.replace('/flag/', '')
    switch (pathname) {
        case 'base2000':
            return <div>Hello word</div>
        default:
            return <div>Errno</div>
    }
})