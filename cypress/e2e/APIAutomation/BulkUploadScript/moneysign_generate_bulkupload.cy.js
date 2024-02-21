const neatCsv = require("neat-csv");
import 'cypress-plugin-api';

const moneysignQuiz = `https://newqa.ms.onefin.app/api/automation/money-sign-quiz`;
const moneysignAddResponseUrl = `https://newqa.ms.onefin.app/api/automation/money-sign`;
const moneysignGenerate = 'https://newqa.ms.onefin.app/api/automation/money-sign-generate?user_code=';
let accessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjE2Q0JCNzUyMTJEOUQ3OUM5N0QwMTYwNTA0MkIyNTMyIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2ODkxNTE0MzUsImV4cCI6MTY4OTIzNzgzNSwiaXNzIjoiaHR0cHM6Ly9uZXdxYS5hY2NvdW50Lm9uZWZpbi5hcHAiLCJjbGllbnRfaWQiOiJDdXN0b21lckFwcENsaWVudENyZWRlbnRpYWxzIiwic3ViIjoiNWM4NGU0NTktNzY1Zi00NDI4LTliYjYtNTc5ZTFjMjY2OGE5IiwiYXV0aF90aW1lIjoxNjg5MTUxNDM1LCJpZHAiOiJsb2NhbCIsImlhdCI6MTY4OTE1MTQzNSwic2NvcGUiOlsiY3VzdG9tZXItbG9naW4iLCJjdXN0b21lci1yZWdpc3RyYXRpb24iLCJtb25leS1zaWduIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.f8Jr3hOpSRufrguD1dvsvYkduQXNTkxHbNF06YsT5-jvehSbrfG64vbpPtND4TcPaZdfxveWQ19kYFKEgZkgr99Cxa7CqV3gQPeAsLgANDVb3SjJf6CgSaxX7CcbFJDm1kTOODqm6tkxkrl3dTG0za42noV2xDZ13k2eCP-cH2K5In-7aSvRsC6cyFQtgkLMLWp6bMQiWcGutDSop6swCQruKnTXDYhWmylu77JE2o131oVo_tV7yvT9nAoTRT6CW0pKItYp1m_VCE_OpbyvRTm2igQLGF2b0XhuTha7s1w_eFZcqs2SsPl79GdnQOahg5KaAy6x-9Id30c5fYBkqw';
let questionId = [];

let answerId = new Array(25); // create an array with 25 rows
for (let i = 0; i < answerId.length; i++) {
    answerId[i] = new Array(5); // create an array with 5 columns
}

var customerData = [];
var answerscore = [];
var distinctCustomers = [];
let userData;

// select ua.user_code,ua.questionid,ua.score,replace(ua.answersid,',','--'),q.question_typeid from user_answer ua join question q
// on ua.questionid = q.id
// where user_code = 'a7dfab91-ec22-493f-a7a7-e61ab552b12a' 
// order by q.sequence

describe('MoneySign User Data Bulk Upload', () => {

    it('MoneySign Quiz Data Fetch', () => {

        cy.api({

            method: "GET",
            url: moneysignQuiz,
            failOnStatusCode: false,
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        }).then((response) => {

            expect(response.status).to.be.eq(200);
            expect(response.body).to.have.property('message').to.be.a('String');

            response.body.data.forEach(x => {


                x.answers.forEach(y => {
                    answerscore.push([y.answer_id, y.score]);
                })

            });


            // console.log(answerscore);

        });

    });

    it('MoneySign User Data', () => {

        cy.readFile('/Users/bharath/Downloads/userdata.csv').
            then(neatCsv).
            then(data => {

                userData = data;

                // console.table(userData);

                distinctCustomers =
                    userData.map(item => item.user_code).
                        filter((value, index, self) =>
                            self.indexOf(value) === index);

                distinctCustomers.forEach(x => {

                    // console.log(x);
                    var custData = userData.filter(c => c.user_code == x);
                    //  console.table(custData);

                    customerData.push(custData);

                });

                // console.log(distinctCustomers);
                //  console.log(customerData);
                //  console.log(answerscore);


                distinctCustomers.forEach(customer => {

                    var request = {
                        user_code: customer,
                        mobile_number: "",
                        answers: []
                    };

                    var custQA = customerData.filter(x => x[0].user_code == customer);

                    custQA.forEach(element => {

                        if (element[0].user_code == customer) {
                            console.log(customer, "customer");
                            element.forEach(xy => {
                                console.log(xy, "xyyyyyyyyyyyyyyyy - ")
                                let questionReq = xy.questionid;
                                let answerIdReq = [];
                                let scoreReq = [];

                                if (xy.question_typeid == 1) {
                                    answerIdReq.push(xy.answersid)
                                    scoreReq.push(xy.score)
                                } else {
                                    let ansId = xy.answersid.split("--");

                                    console.log(ansId, "ansId");

                                    ansId.forEach(a => {
                                        answerIdReq.push(a);
                                        let scorefetch = answerscore.filter(x => x[0] == a);
                                        if (scorefetch == undefined) {
                                            return;
                                        }
                                        console.log(scorefetch, "scorefetch");
                                        scoreReq.push(scorefetch[0][1].toString());
                                    });
                                }

                                var requestTemp = {
                                    question_id: questionReq,
                                    answers_id: answerIdReq,
                                    scores: scoreReq
                                };


                                request.answers.push(requestTemp);

                            });

                        }

                    });

                    console.log(request);

                    cy.api({

                        method: 'POST',
                        url: moneysignAddResponseUrl,
                        failOnStatusCode: false,
                        body: request

                    }).then((response) => {

                        expect(response.status).to.be.eq(200);
                        cy.api({

                            method: 'POST',
                            url: moneysignGenerate + customer,

                        }).then((response) => {

                            expect(response.status).to.be.eq(200);
                        });

                    });

                });

            });

    });

});