<template>
    <div >
        <div class='row'>
            
            <Message/>

        </div>
    </div>
</template>

<script>
import Message from '@/components/Message'
    export default {
        name: 'Chat',
        props: ['name'],
        components:{Message},
        data() {
            return {

            }
        }
    }
</script>