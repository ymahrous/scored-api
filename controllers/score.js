const handleScore = (req, res) => {
    const highestSt = req.query.highest;
    const lowestSt = req.query.lowest;
    const highSchoolSt = req.query.highSchool;
    const highestUniSt = req.query.highestUni;
    const lowestUniSt = req.query.lowestUni;
    const firstUNISt = req.query.firstUNI;

    const grades = {
        highest: highestSt,
        lowest: lowestSt,
        highestUni: highestUniSt[0],
        lowestUni: lowestUniSt[0],
        GPA: highSchoolSt,
        firstUNI: firstUNISt,
    }

    
    const { highest, lowest, highestUni, lowestUni, GPA, firstUNI } = grades;
    const GPAscore = (((highest-GPA)/(highest-lowest))*3)+1;
    const UniScore = (((highestUni-firstUNI)/(highestUni-lowestUni))*3)+1;
        
    if(highest === '' || lowest === '') {
        return res.json({
            score: 'you must provide values for both Highest Possible Score and Lowest Succeed Score'
        });
    } else if(GPA === '') {
        return res.json({
            score: 'you must provide a value for High School Score'
        });
        
    } else if(firstUNI === '') {
           if(GPAscore>4) {
            return res.json({
                score: '5'
            });
        }

        if(GPAscore<1) {
            return res.json({
                score: 'invalid High School Score'
            });
        }

        return res.json({
            score: GPAscore
        });

    } else if(highestUni === '' || lowestUni === '') {
        return res.json({
            score: 'you must provide values for both Highest Possible Score and Lowest Succeed Score'
        });

    } else {
        if(GPAscore>4) {
            return res.json({
                score: '5'
            });
        }

        if(GPAscore<1) {
            return res.json({
                score: 'invalid High School Score'
            });
        }

        if(UniScore>4) {
            return res.json({
                score: '5'
            });
        }

        if(UniScore<1) {
            return res.json({
                score: 'invalid University 1st Year Score'
            });
        }

        const globalScore = (GPAscore+UniScore)/2;
        return res.json({
            score: globalScore
        });
    }
};

module.exports = {
    handleScore: handleScore
}