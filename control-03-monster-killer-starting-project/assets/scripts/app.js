const ATTACK_VALUE = 10;

let chosenMaxHealth = 100;
let monsterHealth = chosenMaxHealth;
let playerHealth = chosenMaxHealth;

adjustHealthBars(chosenMaxHealth);

function decreaseHealth(){
    const damage = dealMonsterDamage(ATTACK_VALUE);
    monsterHealth -= damage;
}
attackBtn.addEventListener('click',decreaseHealth);