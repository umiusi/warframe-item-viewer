var itemData = [
    // credits
    {
        id: 'credits',
        name: 'Credits',
        type: 'credits'
    },

    // ------- resource -------
    // resource - common - alloy-plate
    {
        id: 'alloy-plate',
        name: 'Alloy Plate',
        type: 'resource',
        rarity: 'common'
    },
    // resource - common - cryotic
    {
        id: 'cryotic',
        name: 'Cryotic',
        type: 'resource',
        rarity: 'common'
    },
    // resource - common - ferrite
    {
        id: 'ferrite',
        name: 'Ferrite',
        type: 'resource',
        rarity: 'common'
    },
    // resource - common - nano-spores
    {
        id: 'nano-spores',
        name: 'Nano Spores',
        type: 'resource',
        rarity: 'common'
    },

    // resource - common - polymer-bundle
    {
        id: 'polymer-bundle',
        name: 'Polymer Bundle',
        type: 'resource',
        rarity: 'common'
    },
    // resource - common - salvage
    {
        id: 'salvage',
        name: 'Salvage',
        type: 'resource',
        rarity: 'common'
    },


    // resource - uncommon - circuits
    {
        id: 'circuits',
        name: 'Circuits',
        type: 'resource',
        rarity: 'uncommon'
    },
    // resource - uncommon - omega-isotopes
    {
        id: 'omega-isotopes',
        name: 'Omega Isotopes',
        type: 'resource',
        rarity: 'uncommon'
    },
    // resource - uncommon - oxium
    {
        id: 'oxium',
        name: 'Oxium',
        type: 'resource',
        rarity: 'uncommon'
    },
    // resource - uncommon - plastids
    {
        id: 'plastids',
        name: 'Plastids',
        type: 'resource',
        rarity: 'uncommon'
    },
    // resource - uncommon - rubedo
    {
        id: 'rubedo',
        name: 'Rubedo',
        type: 'resource',
        rarity: 'uncommon'
    },


    // resource - rare - argon-crystal
    {
        id: 'argon-crystal',
        name: 'Argon Crystal',
        type: 'resource',
        rarity: 'common'
    },
    // resource - rare - control-module
    {
        id: 'control-module',
        name: 'Control Module',
        type: 'resource',
        rarity: 'rare'
    },
    // resource - rare - gallium
    {
        id: 'gallium',
        name: 'Gallium',
        type: 'resource',
        rarity: 'rare'
    },
    // resource - rare - morphics
    {
        id: 'morphics',
        name: 'MorPhics',
        type: 'resource',
        rarity: 'rare'
    },
    // resource - rare - neural-sensors
    {
        id: 'neural-sensors',
        name: 'Neural Sensors',
        type: 'resource',
        rarity: 'rare'
    },
    // resource - rare - neurodes
    {
        id: 'neurodes',
        name: 'Neurodes',
        type: 'resource',
        rarity: 'rare'
    },
    // resource - rare - orokin-cell
    {
        id: 'orokin-cell',
        name: 'Orokin Cell',
        type: 'resource',
        rarity: 'rare'
    },
    // resource - rare - tellurium
    {
        id: 'tellurium',
        name: 'Tellurium',
        type: 'resource',
        rarity: 'rare'
    },


    // ------- equipments - primary -------
    // primary - boltor
    {
        id: 'boltor',
        name: 'Boltor',
        type: 'weapon',
        weaponSlot: 'primary',
        weaponType: 'Rifle',
        requirements: [
            {
                id: 'credits',
                quantity: 25000
            },
            {
                id: 'neurodes',
                quantity: 2
            },
            {
                id: 'alloy-plate',
                quantity: 100
            },
            {
                id: 'salvage',
                quantity: 4000
            },
            {
                id: 'polymer-bundle',
                quantity: 600
            }
        ]

    },


    // ------- equipments - secondary -------
    // secondary - kunai
    {
        id: 'kunai',
        name: 'Kunai',
        type: 'weapon',
        weaponSlot: 'secondary',
        weaponType: 'Thrown',
        requirements: [
            {
                id: 'credits',
                quantity: 15000
            },
            {
                id: 'morphics',
                quantity: 5
            },
            {
                id: 'ferrite',
                quantity: 3000
            },
            {
                id: 'nano-spores',
                quantity: 4000
            },
            {
                id: 'salvage',
                quantity: 4000
            }
        ]

    },

    // ------- equipments - melee -------
    // melee - bo
    {
        id: 'bo',
        name: 'Bo',
        type: 'weapon',
        weaponSlot: 'melee',
        weaponType: 'Staff',
        requirements: [
            {
                id: 'credits',
                quantity: 15000
            },
            {
                id: 'orokin-cell',
                quantity: 1
            },
            {
                id: 'salvage',
                quantity: 900
            },
            {
                id: 'ferrite',
                quantity: 600
            },
            {
                id: 'alloy-plate',
                quantity: 150
            }
        ]

    },

    // melee - tipedo
    {
        id: 'tipedo',
        name: 'Tipedo',
        type: 'weapon',
        weaponSlot: 'melee',
        weaponType: 'Staff',
        requirements: [
            {
                id: 'credits',
                quantity: 15000
            },
            {
                id: 'neural-sensors',
                quantity: 2
            },
            {
                id: 'polymer-bundle',
                quantity: 1600
            },
            {
                id: 'kunai',
                quantity: 1
            },
            {
                id: 'bo',
                quantity: 1
            }
        ]

    },

];