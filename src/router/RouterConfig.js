import Vue from 'vue'
import Router from 'vue-router'
import StartVuex from 'components/StartVuex'

import StateItem from 'components/state/stateItem'
import GetStateOfcomponent from 'components/state/getStateOfcomponent'

import MapState from 'components/state/mapState'
import MapStateObject from 'components/state/mapState/mapStateObject'
import MapStateArray from 'components/state/mapState/mapStateArray'
import MapStatemixinLocal from 'components/state/mapState/mapStatemixinLocal'

import MutationItem from 'components/mutation/mutationItem'
import Payload from 'components/mutation/payload'
import MutationRules from 'components/mutation/mutationRules'
import ConstReplaceType from 'components/mutation/constReplaceMutationType'
import CommitMutation from 'components/mutation/commitMutation'

import ActionItem from 'components/action/actionItem'
import SimpleAction from 'components/action/simpleAction'
import SendAction from 'components/action/sendAction'
import MapActions from 'components/action/mapActions'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/stateItem',
      name: 'stateItem',
      component: StateItem,
      children: [
        {
          path: 'getStateOfcomponent',
          name: 'stateItem.getStateOfcomponent',
          component: GetStateOfcomponent
        },

        {
          path: 'mapState',
          name: 'stateItem.mapState',
          component: MapState,
          children: [
            {
              path: 'object',
              name: 'mapState.object',
              component: MapStateObject
            },
            {
              path: 'array',
              name: 'mapState.array',
              component: MapStateArray
            },
            {
              path: 'mixin',
              name: 'mapState.mixin',
              component: MapStatemixinLocal
            }
          ]
        }
      ]
    },
    {
      path: '/mutationItem',
      name: 'mutationItem',
      component: MutationItem,
      children: [
        {
          path: 'payload',
          name: 'mutationItem.payload',
          component: Payload
        },
        {
          path: 'rules',
          name: 'mutationItem.rules',
          component: MutationRules
        },
        {
          path: 'constReplaceType',
          name: 'mutationItem.constReplaceType',
          component: ConstReplaceType
        },{
          path: 'commit',
          name: 'mutation.commit',
          component: CommitMutation
        }
      ]
    },
    {
      path: '/actionItem',
      name: 'actionItem',
      component: ActionItem,
      children: [
        {
          path: 'simple',
          name: 'actionItem.simple',
          component: SimpleAction
        },
        {
          path: 'send',
          name: 'actionItem.send',
          component: SendAction
        },
        {
          path: 'mapActions',
          name: 'actionItem.mapActions',
          component: MapActions
        }
      ]
    },
    {
      path: '/StartVuex',
      name: 'StartVuex',
      component: StartVuex
    },

  ]
})
