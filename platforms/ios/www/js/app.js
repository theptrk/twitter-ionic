// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'twitterLib'])

    .controller('MyCtrl', function ($scope, TwitterLib, $http) {
        /**
         *
         */
        $scope.doLogin = function () {
            TwitterLib.init().then(function (_data) {
                alert(JSON.stringify(_data));
            }, function error(_error) {
                alert(JSON.stringify(_error));
            });
        };
        /**
         *
         */
        $scope.doLogout = function () {
            TwitterLib.logOut();
        };
        /**
         *
         */
        $scope.doStatus = function () {
            var options = {
                url: "https://api.twitter.com/1.1/statuses/user_timeline.json",
                data: {
                    'screen_name': "outstandem",
                    'count': "25"
                }
            };
            TwitterLib.apiGetCall(options).then(function (_data) {
                alert("doStatus success");
                $scope.items = _data;

            }, function (_error) {
                alert("doStatus error" + JSON.stringify(_error));
            });
        };
        /**
         *
         */
        
        // ======
          $scope.prepareTweet = function(){
            //var imageUrl = "http://cdn.wikimg.net/strategywiki/images/d/df/Portrait_XMVSF_Gambit.png";
            var imageUrl = "http://upload.wikimedia.org/wikipedia/commons/f/f8/Golden_Retriever_Puppy_12weeks.JPG";
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function(){

              if (this.readyState == 4 && this.status == 200){
                var reader = new window.FileReader();

                reader.onloadend = function() {
                  var base64data = reader.result;
                  base64data = base64data.split(",");
                  base64data = base64data[1];                  
                  alert(base64data);
                  alert('second');
                  //var encodedImage = "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"
                  //var kale = Base64.decode(encodedImage)
                  //$scope.doTweet( "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH1woaABk24kEV7AAAGf1JREFUeNrVm39sHOeZ3z+i3qXeEWftmYhrcSqvzVW8simESpaJZJhIqCWRU64KaqNSmwD19ZxC16ZF3OTac+9SnFtSqFukrY04gFPEQHR39p18tQobsRKrNYuINJPKCdXjImSijbWORsrKno1mrZlyRpo35Guqfwx/iCYpS46Su3uBBYmZd955n+/7fX6+76zjr7kdLg2UbUOWJ5Lq7kcrbv9v+v3rfl0DP1UqlR3DLntJMPpwpTK62v1C222D8VxS9pOof7U+f6sBuFpIAPfShYMLQj5VKpW3ZZ2RM4lHTbv9T1TC0T8oWWWgvPDsE5VwCOAPStZQgCJEAYy+WGH0bw0AizS/9+MjuQ23lE9HXv/DlcroC70DV4LZiKqu9QNliRy0sZFIQgJMsjiGTRaTZFYT6BhFgkIREKHQ2MiDE5zlxQpDf+MBWABBrG8pn00aozuz95RPRj8dvcKVcjs5YiIA8kYOW5hIIfBVTG22jq9jTqoEhT7oKZt9VgCAp5zB7TIBYIZ1o5cIDj5RCUd/4wA8VSoNAbttkS3bGRMAKQSRVsSJPhgQ8HClMgRwuPe+K34Skzdy+LMB24x82o8IR+RQWhMQMJHUUCiKFJBITug6FbWOWMuDrusuW/FCoVDut7yyjTV4gbdH/7wy2/8bAeBwaaB8W1vb4OzcO+WAgCTVUQwkJlmyQiKFQGnNmcSjof2DAB2GPQiwXRYIlcKSEi+KERmozrr4OqBIgZyRRZEQzMbUdYhmFhuJrzMcjXW/67orVntfKbUhN2In1r1f4QOCkZDgYEA4+kQlHD3Wu3foSss7u/XclXJOpkzwVUw4G+MYFonWvBBN0isdcuQgoxEClNbzwtlYUq54l9KaIFF42ickIEGj0Pz40i2jr5w+3f/XYgSfKpXKCxb9xMC+obpqDr6VXBw9z/lXASRyMEuWvNGOI3L4OkQg8GcDqiqmO2tiYxPMRhgY2BkTS0qU1kRaodHpi2YFZDQGkoiYeuLjERBrg0hLjPVq1MoErwKj70f/f2Ub8ELvwJCbeDg4o7Yhy8BggiIgoJnERPPGbVd2O34S0SRkMhZ8yrQxM5KskJhCEmtFojUxETrJMGtE5MgtqpGrPMajkKOxGnVk8Oo9UhFrOVgUkqY2yIsrZGgdvcCFGzaE638VAI7U3dF/c9d9g5fE9JCB8aoUoqzn5rjMZe7MbKEzswWB4K/U66yby+DNzPGRja20ZVrJyxwzc5o3Z3x+8cuQzNwGNm7IINe30iE2pfd+6eNevkBbppU7W2zublWds+jyhRn56rd+0uy/csut5YyY7vzOtHEwK98819TiT397i3z1tYY6+xthwLHevUOnEpdHKtWhIx//+MjpS+dfDQgpUhwURkpjG5tqcgaPJg4OHpo9RhFESm2tU69xOqkTa0Ux6+AlAQ0d0mXksYXJK5HLa8rjLiHZIWwAppkevcSlgy+GNp8wo5Gc0P1PVMLRj2/bMvL902/2/8bjgMdKnUMW9mjeyI0A1GbruEoTaIEjA2wkkzrmZJzlSScFYDw6xa7sdgwkidYgNLXIo5h10InAwyfWii4jz8nIJxF1XJXFFMkyIP48bD14b9ulwf/+4wv9vzYbcOCwVy4NUG648PILjFaecFbo2vG++6+cSTxeatkw+r/bfqesrD5M7xBCuWijSFF4NPyz/Ac7opooeg2H/+zXeMzpBuC70QQ7jAJeElLMOote4PmgTk5AXggCAoR2OBLHB0uSwV4pF0EAWM09Xqu1XG9H02ak4TIYxQzGyhuxSvuG3uUahzztU9W1/m9bX0RZfYh4AoAw/whxx0NU2r+M1/UN4lnFEeePcaTFZO4zfFNpTCGxRZZTSZ2YiKmojkHqFrtkgofPpA5wyFHTMSXJ4ItVd93hS2+P/lJ/oDzQxuCNCn/dABw47A0VSxCFMPZdTX3qGGHlxWUA3NbWtvt88nbqjjbcXgYQcYXYOQDCWjZeVXRRlz14KiQvJBUsXOXRYxQJiSllt9ElCnw3miAv28kJG61NbCTj2qdXSkwRUSgUhiqnL/QfieP+9nVm+VPbto38WgBYaFkLKrUIGU2sQHp67lL5AhcOMvDUEMICHaJlYdVx6kZPakStfRS1R13keT6KMYXE10XqSYCTNYEMvorZYRQpSfB1Bgebmo7YIXIAgwu0PxLH/fdsuFLe29UxdNMBcArpiyZOAMoFePXdfQICnqiEo8wLvZdnOPWoyzN9h/hC4Vj6nA4XBU8V3CUkRCYuJ3BwlceObJbDWhNrRa/RRSWpIYWgIPL0SokWPhKDutZ8xjQXw1/XdUePxrq/KLKD86n1zQHgwGGvbFoQB9AIE2QKwEpdS4yDaSaUAiBNh6kXhqmPPccf7fdJDrl4jxzjcefLfCH/HN36KInymJxN1UMLk5ciTQcBVYqMRXVy0uSMTvBVzFbDQZEgkRSFyWtKkRWKAmm94WoQ3pxtHbxpgVDP/kc+d+d2yhcb8PIrihbvfzD9V8/9k3f3KzpR+eFPO8C6P63qbnqzo+T164Rqhr88/APukBJ7s82OD23m/gc6+Kd/r5Vtosl/+sMd/MN7pnGaU7TMhWzTDrflG7zSmGG3kaWmbWL9M+5u20JdNfnOJTW6tfWdzntbNx381qWQna122XSar1YbnAUIw/DspbbbzoVheF3BkLhe+p+ehDhuYunw4Irk6EChDOy2bXswp8+AglyxSJelKUgQfzLOsUNTuMb3ePwrD6X5/JTLVDPg6NCzmOHPUTJDMW+iagl3ZQP+AodxrSgakuFIUFIxeaOdSqXW31uyrgCD3z/95rrfLmWupCy4MHo1E66XAeJ6O75xPkGoM6wi/Iht22XLSqm8J5ni6QiEKeh6IPXvha05qsPHCQJwa6fp7minebpGcKrC8BQMSIefa59qVrFHKLblHRiHyUTwOQMe1znqiU/eyPGF3o4rYjZmIV86odTBLtky+H4DuPXv6f560uDn1Vc1Mxe+R/zDr/cvrPqDvY6bz+c75VVp7DvvzHI42MdYzWb79ElU5fvkd3bTtnETd/f14hTvJG40ufj6z5i5fJkHdjnMGtP0FG9lYFeRGZGheiHgeHAnrZzjU8YmPt0/zcvVy/TbW9DtTdpu3YAOWxjoNYb0zNvwTktnxpbr6k11w3HANRlg3cZuSP1/I1RY0cSoAr71xQ+N3HLLLWW5Sv6eJLPzI1s8ePwTjO89hcgK2ntuR3kKkRVEFX++mpNHmhYP/u5nEFmBjjTxs8c4WkmHyAiItCIDKBShUoRhRHveBmOW3p4u1HZVPjFxhhNvzO1+Pwy4JgBGW+piKhMalMsnbp/lXz7Qc8V8V2BzdZvyl4bsMWt079+zoo+OUv62F4vEns/JZ4/QXixy9ITHWNVncraI0DH3b4fYjTg+EbCnG5LzClPZ3JHLMuH/PPU2UtLbs5V6fLo8cFvbyBPfv9R/UwBYcH8NFzx/li8Uj/GlgV+WtbAIK2sPONkUMI/PP+txCWvZNE7wPbIyR9CcpXG2ugiE07OdscNNhl6OAHP+B1upYwqNmyhy7Zo77rBJzoNAYFkWBSdZfKeUku52wfbtHy7v+qh/pTbl9z96/PrqAteKA8qmDaZXZajrCR57qI6Ze2+bWYuyiwFPXzFO84iOdvLd3dROTjB8+Ch1P0BKiYoDrGIHY7Vk+aroGE8Jnh1XKDQ78yZSSgICspaYVx9nubdycikQe/IM7Ns+Mu+Z3j8DnAKDPbXH6HRc7C4JCBKlrzmY5/nUsp8HdQaEjVPoojY+wfiTfwa523DyHeRMiWFkCMMYr+qSK25jIjCWq57ySKRDVy6GAGw7mwJGhOGsPgfHySFS8lAa6MDMiZHD0P/goWu7RLEW/e9zH6Orq87Vhs62JGGgECboeOVzr3kZ1EL8rwOkI+l+oJeugV1Uh49zYqxCM45oN1O12HZHjpePvEBI97LVX/i7My9wA7U4B4VGyrVZKEwW7xe72wFGvnrh0ui/+vbadYJVR/vnwYODd/Waa75sLQAiPd9fFhgIDwEDxF6ToOZRr7rkcxY7tuWXgfrUiWh5whXXCKwS+fg1tuULxL63ZDyJsO071gRAOiCNpTkXu9vhd+4pfxVG1gJhRRxw8qmBkbt6zfKaSK+D2NcrAPA8n++8rjnX9kkQNgU9wfbpCps/eDfrN6zH2rSJ9XMgWpb6N5sXeaaWQwsToWPaLp/j0sY7aZ25yG9t9vnY3VvIZjNI2QrAZT2N4+SuCYDjmMuubdq8kTvv+UBnl1blb/84euaaALyn8PMlJMUMqrFceKUUf/kzmzjbDa0Obmsv+V88w4YLbxC/PcvGWw1u2boFfWkdzUYDrTVPjyvqInV5hvKIzCKtMxfJaZcDvZvJZtsWhQfIZg2EWH1usgPMnCCbbV1xr+3WVv7OVqvzYxvmyi9WwmdWBeDEYwPlWxwxJLJgXEvPRAtKaVQ4x9zMfIHDfYuL0xE/uLiJuK24mBH+4K2QiVMuYfM8l9/6GevDi4TNJkmSUHFjXmk6GMpDiyxKOsh5VH9rs8/HP7J1lXeLa67+5i0bEWJ1x7Z+QwsqvNL50VveWXesGo+usAG9jx4fBdYd/uq/HTGN6XJ3zsUuiFXtgDQEwlxSg9p5n1pkrtzVad9PzQvw3J/yfN1EjMdkdILQMVqYICAyi8uesfHZ0+3cWDRngtm+cq5KaSJfc74WEp5VnDnz1sGenu2jPxoojxi5W8tvnDx5cIV01Xu/WO4owJGnxymNvchAt0uhx1o2uG1JQkctqoGXCCb1tnnrHaJ1mJbBhEXs/B5430yvCxNFx5qCZHRET07hOPnrElwpRRBEYGvcoxA3FZ4XYFkmhR6bdWGGjk6JNEw67+s4aFnWaL60a6S953YAmnV/UKxV/BgPunlhqs6+Wu3gZybP7L5jxwfKHdtNbCu14JYtUR0pCLGWKNkxD0CA1sFSHVBYxLn9mP4L6Iy9tGqzAUKHS2yYd321yCQMYyxriVFhGBIECUopkiQhDNVVUaDADrNYBUlp132UgBMvjFE5XufzXx7AvIqYlSpl02lPwfMUYePsCgaUTXsh/E3j/+eOnxh6bj77q75GOZe3B++5r4NcXqIKmmas2ZXXjHtLgqHcRTuw4BZ1xkaZJTB70khRncEMjiNVY9ELJNLhtOhg6JUqX3kgndrExGmUSv1/vpijUCxh2ZL2vE22I4fMtq9gRnve5tmhwxx7foJiVw6BgaZ9MAxDYq+JdG5HmILXXz+/e5kXGPgXjwzat9E5MQaV1y9j+i+Oqkb1mXTLOTy7v8fm8rT63OzcOzSqig9s3ojIQsvFFqbqlwm5lZY5hc7YzLVIEPayic0JO73WIqHFoOWXLlKdRwuT1pmLaGEy19LK2y05qmc9PvyBy7xx/iJ3f3ALD33tD7n8dhN1Meaj+/fQtimH2LCR2vg4F15/k1xhy5LV35SjWaty6NwDxMV/zJ6PZSiUu8l3dxP8vM70uQtknRxGZkOneHf2FwfzxY+0pr+i+CmlpDRwO35d8b0jVXJ5m3wxx0N+jSdrBiHtyOQMsewElligzR6IJ5auCQtlljC8FxfVZ0EVANwAHjrZR58Yo93zUVGT0gN7l+cd4+Mc/drRVE2CmCRucoTH8UUes2s/3Z+CBPjsWA/FE1UK1iwHtjexih1pIpa/Y8kNLhQ/Fmp/XPw/i8WPhba/x/6c1rqMaiO/YyNCbODcT37B5WlF5+2bMdT/4/9Ob0pZsN5grtVJV3uhtb7Lus8psuEYM62bFkPguZbW+f/XcXHTJwmwuWfmJG1Ck/9Q1+Kjsdfk7E/qSKG4eCGmu7ebyoU8w9HfZdtdLWzYAOdcaDXhQztaiOc2E25weOnNXfzX/7WNt37aQG3QS25wofjh1SFWGjM5c3W9r5zL24Ptt5ssGMIgVBR6LNyKj23baKHo25bBj19juN6O0DGhsNDWwNpmXBYI7F5k4qJkB/Z8nh1YO1HZEqZVRFh7+e75kPbhlynt7VvUedNp5779A8DS+F0DkD9+iK8Nt+PJ7WSz0GjAG1aRYkHMB1PQs0Pgs4fHxqpLACwUP2o1DTrk3330zdF7/8G9I7ds2rDM+l/tCgG69zhMDXt07XVQnmZvYuEGMadUjOUfJV5wiQuuSxZSOzB/LW6/H9P9j2hhElg70cVHUnVoDNNV2EGsNFOqyC4dM3V0nO77dy0zfIFXRTUgDAKU0tiJ5o+6moQ1H3fCQ0qBcnZxaKwXUdxLqdshjmFi0qNx/lS6OXrgsFculhgpNF7A9KoUqGEVxAqh16wCDTfTImivRdzUDD9T5etVh8nZu0DYWIVPk3NS+nq+h24Mo/1x4ty+xdpBO3VC8ohoAm1sRSRncHYdJKo+hZIFcjTZH38Fc61QWKaBkG2nhte2DSzL4hCPUlGddFgGjgMTk5o4rGFaRaqvPcO6E48NDJ3fcu/uD932w7Jly+sWeiUIIcW+NINUSjM13OT5EyZPq99FxBW0LNB+ey9OzpkvXU8iw+Nkux4mCWpo2YljG4sgcf55VFBDZXvo2nkAz/fY3+tS0BXGhn32FsZ56PMFglChPGh4Pl4jRnkQBAGGYTAmDyAGDlyVs8DYiUlUWMOUgpA8606/tOdKLi+vmWdfT4ubGr+uKJSWLLlfVzz7osnhYD+1cBYRV0DYdLSnVj/UWbQ/jtPz+0u70PPz8CpPEpLHFDGx0nSX+njoy2nY/CdfT5DHP8c3vrSY9y/fpgsVsa9RTQvTyREGAfXqeQ6d7uVo/AlQLkKHyOQM6//Lv//w0FoJxI201o0tZDIt/OLNy9y6qXU+CxP0fGSGgY3fY3p6ExXxIMwlXL44RazeQek5yNhMN35Ia8sMquU2skYGr/Ikdueniev/k8Kuf012Y5b1pqbUm6bCY8c15966SNvr32dXX25FAmRIweULc9w58EmyTo5cIU+baqPz0iiT1R9xsWUzWljMtHWx/tEvdA1xk1rrxhY2tLUQxTOLGaUQLeTyG7kv7/L31x9B6RwV8SBixmdjMIrIfQyr/R7i1w9hGoJG5WuQvYsNm/vQM5e5NXcPbtjKjJ5jW+FWalPwgwlFS/gjisEYtt1C/oP2irmEYcz0OcF0/SJXVFqqnwl9PnbLL/jOuY3MrTfYGE2w7q0Te69cbdVvRgtCteZ4fl1xthLydG0vh/0BZHh8kfraH8fsehgnJ1iHD8Kms6fItoKgYz5+qlXg0GNPkg1e43F7lglzike/MrCqCk8NN2k2Tf7sRMxn+2DXzl4eOCSZiO8CHSKVy7rk1L4rQahQiUYa4qYBsRC/r9WuBuKlYCe//8iORSHXag0XxoZhbHyC7trv8XT+Pg4Hx9n/UIH79qz+8Ke/PkBd7MXJZZgYP0GsZsHsQTRfRAsrjQNsSy7W8oNQYUjxKxvF93o+l5fk8h101MbYU/GIVAZIXWUcQBxCFEMUQcPT1GqzRFEapMnwODmR0rrX6GLieG1VAI6dMNG5PormvAucsJDxMEqHada6AMBqAc57reDNavmiSS5fZ2r4UR59/o85PdtFrDTx1SX49EwCQgeIuELOH+Y+M51nQTq4cZW6G5IvLN+xOnoyQ7EvRxSlQMaxD7KAVC56PlET11rBa+nyzWw6hm8cPcUkr4E6jCAlpJgNsfEwhZr/mkDSQYxjBuzO7lhKf7XD8NEaB760cylRmmpSrWo6S2n463ksBl3qqlT92nuDUuB58YpK681sSmmef6YCgcMB+U1sJEfjd9LaoJkeopZIHCNdsaywMcXyMlpWW0y49WWsrRyvc39R8kw1oW+XkRZGZGGRTdd1RGYhqlPvsSP0q7Sp4SbuxCy9UlLAoa41JXmF+01JRWXYkS3QYxdwpIUjLUyxkpESA9ePcU8100NYtRAdw0BB89nwESYmNdksFAvOjZ8RsmxJEKhfi/B+XfHS8CQ2kikdMqxraYIlcliY9ErJXwQTDEcVPBWuPc5sQENZuD8N5unvL5bUukSVhzKPMjaerDiud10nRGxL4gbhNY3i+7UVb0x5BAF4yqAgI4rkkSyNY2GyS5iEOqCq61STMwSE2Fh0GDbxrMLXAXUNHdiMTYbs/UfQqMZ0dRUWkyIhxukK/hsnM595f0dkFlhwLVvwfrzG5HiTrbTPfyixNoAWNgJBVhj0ZLYvfVgx/8dTIYcDl3o9ou6GJMnSbnPHPRbffe40MWeIrPlirQ5v7Jzg1a5xLWOZ3KCd8OuKqutjYV+fp0AT6IgziUesl1TS1yFu4tEgoKEEzXq0uH2mlMJr+NgIOtQ4fb07MOOpG7MBiyBcwxZIKVCJvmH6m9q6weMsgty8/z6l6rwQjDEenWZc++yVObqFzUSlgW1ncd06nSWL6glvfsOlSaPpYd712dVVILiq1r6aPi/Qey2q36incCshda1xdTj/TWD6LdBKCy/mfwY5ASZ1VKRwsLDnT5PsErk0ShCKhu+xNauwCpKTY7Xl89IhiyHv1QAEoaJZV+j5nerQSfX93YI6jonrhhQK1qp24oYSpiCiT+TnZ7ByPA8fh+U7wSEBHooEjUdIF4V3gSU5dVbSuzVVy8qUvzSesjCtIo1Tk6urQFwD1Uh/cY016e44Jp4X35QA6Jr3V2GDhU0XBUKVo4CzyjOKRrI0774925cKNrM6LbZcTyCkYwhdvXbtzRDUa/G7Tn7dxOgQhafsVa+nf5Nl7nIx/NXpcz/3I6QU7Ly/g4F923Ecm1qcXda3Sx2jL/rakg2QHenqh2GIZVkpG9bQd9uSNE6FqPzSfX2DpLAsCcFaACSEKEIkCZqQGAuJjU1dayCzCEZAhE02/cJUKYpmQK0u6NuTXzwv1NXbTv8+TRjs55G9iiBMUF56ruj/A9GidFAwqHN1AAAAAElFTkSuQmCC" );
                  $scope.doTweet( base64data )
                };

                reader.readAsDataURL(this.response); 
                alert('first');
              }
            };

            xhr.open('GET', imageUrl);
            xhr.responseType = 'blob';
            xhr.send();    
          };

          $scope.doTweet = function (picture) {
            TwitterLib.tweet("@kale tweet #veglife " + new Date(), picture).then(function (_data) {
                alert("tweet success");
                console.log(_data);
                alert(_data);
                // get request to s3
                // encode image to base 64
                // 

                /*  $q's
                    oauth.get -> First verifies at 'verify_credentials' with access token
                    oauth.post -> statuses/update
                 */

            }, function (_error) {
                console.log("tweet error" + JSON.stringify(_error));
            });
          };

          $scope.codeBirdTweet = function () {
            var encodedImage = "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"
            var kale = Base64.decode(encodedImage);

            var cb = new Codebird;
            cb.setConsumerKey("hG5JkrDkarl5cPmjc94Lwsu7a", "3s0oxghx1yQ21ag8r7R5KnOVWRJXuXHsjJvjCmdJRxj20FKUIv");
            cb.setToken("2463613218-lfQZtmG7RsQb3VqgzpuQJRDfo27tTn7HM5tR3YG", "wko1a2oGAWD9ZiDz0eXCNlfi4W8ijkqtmrAbIg0SRz8aW");
            cb.__call(
              //"statuses_update",
              "statuses_updateWithMedia", // path in camel case
              {
                "status": "Whohoo, I just tweeted! " + new Date(), // status 
                "media[]": encodedImage
              },
              function (reply) { // cb from cb
                  console.log(reply);
              }
            );
          };
        // =====
        // $scope.doTweet = function () {
        //   console.log('=== DO TWEET ===')
        //   $http({method: 'GET', 
        //     url: 'http://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg'})

        //     .success(function(data, status, headers, config) {
        //       //console.log(data);
        //       //alert(data);
        //       alert(oauth.getAccessToken()[0]);
        //       // var encoded = window.btoa(encodeURIComponent( escape( data )));
        //       var encoded = unescape(decodeURIComponent(window.atob( str )));
        //       //console.log(possiblyCodedImage);

        //       TwitterLib.tweet("@kale tweet #veglife " + new Date(), encoded).then(function () {
        //           alert("tweet success");
        //           console.log("tweet success!!!");
        //           // get request to s3
        //           // encode image to base 64
        //           // 

        //           /*  $q's
        //               oauth.get -> First verifies at 'verify_credentials' with access token
        //               oauth.post -> statuses/update
        //            */

        //       }, function (_error) {
        //           console.log("tweet error" + JSON.stringify(_error));
        //       });
        //     })
        //     .error(function(data, status, headers, config) {
        //       alert('dotweet error')
        //       console.log(data);
        //     });
        // };

    })
    .run(function ($ionicPlatform, TwitterLib) {
        $ionicPlatform.ready(function () {
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }

        });
    });

//
// HERE ARE THE CONFIGURATION SETTINGS FOR OAUTH
// REPLACE  THESE VALUES WITH YOUR KEYS FROM TWITTER
//
angular.module('starter').constant('myAppConfig', {
    oauthSettings: {
        consumerKey: 'hG5JkrDkarl5cPmjc94Lwsu7a',
        consumerSecret: '3s0oxghx1yQ21ag8r7R5KnOVWRJXuXHsjJvjCmdJRxj20FKUIv',
        requestTokenUrl: 'https://api.twitter.com/oauth/request_token',
        authorizationUrl: "https://api.twitter.com/oauth/authorize",
        accessTokenUrl: "https://api.twitter.com/oauth/access_token",
        callbackUrl: "callbackUrl"
    }
});