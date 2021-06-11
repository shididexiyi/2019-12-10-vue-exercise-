import AAA from '@/views/YeDangEntermentation/team/exid/a.vue'
import axy from '@/views/YeDangEntermentation/team/exid/axy.vue'
import axz from '@/views/YeDangEntermentation/team/exid/axz.vue'
import updown from '@/views/YeDangEntermentation/team/exid/updown.vue'
export default [{
    path: 'AAA',
    name: 'AAA',
    component: AAA,
    children: [
        {
            path: 'updown',
            name: 'updown',
            component: updown,
            children: [
                {
                    path: 'axy',
                    name: 'axy',
                    component: axy
                },
                {
                    path: 'axz',
                    name: 'axz',
                    component: axz
                }
            ]
        }
    ]
}]
    
