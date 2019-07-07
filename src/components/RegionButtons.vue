<template>
    <div>
        <!-- <button class="region" v-for='region in regions'
            :class="isSelected(region)"
            @click="changeRegion({region:region});">
            {{region}}
        </button> -->
    </div>
</template>

<script>
import Constants from '../Constants';
import _ from 'lodash';
import { mapGetters, mapMutations } from 'vuex';

    export default {
        name: 'RegionButtons',
        computed: mapGetters([
            'regions',
            'currentRegion'       
        ]),
        methods: 
            _.extend({
                isSelected(region) {
                    if (region == this.currentRegino) return { selected: true};
                    else return { selected: false}
                }
            },
            mapMutations([
                Constants.CHANGE_REGION
            ])
        )
    }
</script>

<style lang="scss" scoped>

</style>