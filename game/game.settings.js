/**
 * # Game settings definition file
 * Copyright(c) 2017 Stefano Balietti
 * MIT Licensed
 *
 * The variables in this file will be sent to each client and saved under:
 *
 *   `node.game.settings`
 *
 * The name of the chosen treatment will be added as:
 *
 *    `node.game.settings.treatmentName`
 *
 * http://www.nodegame.org
 * ---
 */

module.exports = {

    // Variables shared by all treatments.

    // Numnber of game rounds repetitions.
    // TODO: if the value is changed the QUIZ page needs to be updated.
    REPEAT: 4,

    // Minimum number of players that must be always connected.
    MIN_PLAYERS: 4,
    GROUP_NAMES: ['1'],
    //old information
    //GROUP_NAMES: ['1', '2', '3', '4'],

    // How many player in each group. *
    SUBGROUP_SIZE: 4,
    N_HIGH: 2,
    N_LOW: 2,

    // Noise standard deviation. High and low "meritocracy".
    NOISE_HIGH: 1.4142,
    NOISE_LOW: 2,

    // Payment settings. *
    GROUP_ACCOUNT_DIVIDER: 2,
    INITIAL_COINS: 20, //before 20
    HIGH:40,
    LOW: 20,

    // Divider ECU / DOLLARS *
    EXCHANGE_RATE: 0.001,

    TIMER: {
        instructions: 90000,
        effort: 60000,
        quiz: 90000,
        bid: function() {
            var round;
            round = this.getCurrentGameStage().round;
            if (round < 3) return 30000;
            return 15000;
        },
        results: function() {
            var round;
            round = this.getCurrentGameStage().round;
            if (round < 2) return 60000;
            if (round < 3) return 50000;
            return 30000;
        },
        questionnaire: 45000
    },

    // Treatments definition.
    // (They are actually defined in the game).

    // Custom pages depending on treatment.
    bidderPage:  'bidder.html',
    resultsPage: 'results.html',
 //   quizPage: 'quiz_random.html',

    treatments: {
        Treatment_1: {
            description: 'Merit-based and High mobility',
            instrPage: 'instructions_high_merit_based.html',
            quizPage: 'quiz_exo_perfect.html'
        },
        Treatment_3: {
            description: 'Non-merit-based + High mobility',
            instrPage: 'instructions_exo_perfect.html',
            quizPage: 'quiz_exo_perfect.html'
        },
//        Treatment_2: {
//            description: 'Merit-based and Low mobility',
//            instrPage: 'instructions_low_merit-based.html',
//            quizPage: 'quiz_exo_perfect.html'
//        }
//        Treatment_4: {
//            description: 'Non merit-based and Low mobility',
//            instrPage: 'instructions_low_non_merit-based.html',
//            quizPage: 'quiz_exo_perfect.html'
//        }


    }
};
