import gql from 'graphql-tag';

export function getReview() {
  return gql`
    query {
      reviewList {
        description,
        _id
      }
    }
  `;
}

export function getCompleted() {
  return gql`
    query {
      completeList {
        name
        description
        type
        rarity
        weapon_type
        damage_dice_count
        damage_dice_value
        damage_type
        range_normal
        range_long
        properties
        armor_type
        ac_base
        ac_dex_bonus
        str_min
        stealth_disadvantage
      }
    }
  `;
}

export function getItem(id) {
  return gql`
    query {
      getItem(id: ${id}) {
        description,
        _id
      }
    }
  `;
}

export function saveWeaponMut({ id, item }) {
  const properties = (item.properties.indexOf(' ') !== -1) ? 
    item.properties.split(' ') :
      [item.properties];
  console.log(properties);
  return gql`
    mutation {
      setWeapon(id: "${id}", item: {
        name: "${item.name}",
        description: "${item.description}",
        type: "${item.type}",
        rarity: ${item.rarity},
        weapon_type: "${item.weapon_type}",
        damage_dice_count: ${item.damage_dice_count},
        damage_dice_value: ${item.damage_dice_value},
        damage_type: "${item.damage_type}",
        range_normal: ${item.range_normal},
        range_long: ${item.range_long},
        properties: ["${properties}"]
      })
    }
  `;
}

export function saveArmorMut({ id, item }) {
  return gql`
    mutation {
      setArmor(id: "${id}", item: {
        name: "${item.name}",
        description: "${item.description}",
        type: "${item.type}",
        rarity: ${item.rarity},
        armor_type: "${item.armor_type}",
        ac_base: ${item.ac_base},
        ac_dex_bonus: ${item.dex_bonus},
        str_min: ${item.str_min},
        stealth_disadvantage: ${item.stealth_disadvantage}
      })
    }
  `;
}

export function saveItemMut({ id, item }) {
  return gql`
    mutation {
      setItem(id: "${id}", item: {
        name: "${item.name}",
        description: "${item.description}",
        type: "${item.type}",
        rarity: ${item.rarity}
      })
    }
  `;
}