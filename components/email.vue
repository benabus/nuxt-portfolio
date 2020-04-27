<script>
const a = 'outlook';
const b = '@';
const c = 'ben';
const d = '.serrette';
const e = '.com';

export default {
    data() {
        return {
            email: `${c}${d}${b}${a}${e}`
        };
    }
};
</script>
<template>
    <a :href="`mailto:${email}`"
       v-text="email"></a>
</template>