<template>
   <div> {{message}} </div>
</template>
<script>
    export default {
        //이름을 입력시 모듈 export의 name으로 활용가능
        name: "MessageDiv",
        props: {
            message: {
                type: String,
                default: "메시지 내용"
            }
        },
        created() {
            console.log("MessageDiv 컴포넌트 생성")
        }
    }
</script>