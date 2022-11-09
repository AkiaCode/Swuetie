import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <div style={{ 'textAlign': 'center' }}>
            <input placeholder="Enter flag"/>
            {/** 맞춘 거대로 list화 하기 */}
        </div>
    )
})