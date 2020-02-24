public with sharing class lwc9ApexClass {

//TRY REMOVING AURA
    @AuraEnabled
    public static List<String> getFruits(){
        List<String> fruits = new List<String>{'apple' , 'grapefruit', 'banana'};
        return fruits;
    }
}
