<template>
<div class="d-flex flex-column align-items-center">
    <img v-for="(file, index) in pics"
        :key="index"
        class="img-fluid m-2 p-1 border rounded"
        :src="'/assets/img/24hrcomic/'+file+'.png'" />
</div>
</template>
<script>
export default
{
    data(){
        return {
            pics: function(){
                const tmp = [];
                for(let i = 1; i <= 24; i++)
                {
                    const str = i.toString().length > 1?""+i:"0"+i;
                    tmp.push(str);
                }
                return tmp;
            }()
        };
    }
};
</script>
