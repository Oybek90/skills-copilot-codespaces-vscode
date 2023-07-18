function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'moduls/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '_'
        }
    };
}