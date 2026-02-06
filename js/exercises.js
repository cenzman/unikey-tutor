/**
 * Exercise Data for Vietnamese Typing Practice
 */

const exercises = {
  beginner: [
    // Individual vowels and basic tones
    { target: "â", description: "Type: aa" },
    { target: "ă", description: "Type: aw" },
    { target: "ê", description: "Type: ee" },
    { target: "ô", description: "Type: oo" },
    { target: "ơ", description: "Type: ow" },
    { target: "ư", description: "Type: uw" },
    { target: "đ", description: "Type: dd" },
    { target: "á", description: "Type: as" },
    { target: "à", description: "Type: af" },
    { target: "ả", description: "Type: ar" },
    { target: "ã", description: "Type: ax" },
    { target: "ạ", description: "Type: aj" },
    { target: "ấ", description: "Type: aas" },
    { target: "ề", description: "Type: eef" },
    { target: "ổ", description: "Type: oor" },
    { target: "ữ", description: "Type: uwx" },
    { target: "ợ", description: "Type: owj" },
    { target: "ặ", description: "Type: awj" },
    { target: "ệ", description: "Type: eej" },
    { target: "ộ", description: "Type: ooj" }
  ],
  
  intermediate: [
    // Common Vietnamese words
    { target: "xin", description: "Please" },
    { target: "chào", description: "Hello (type: chaof)" },
    { target: "cảm ơn", description: "Thank you (type: carm own)" },
    { target: "Việt Nam", description: "Vietnam (type: Vieej Nam)" },
    { target: "tôi", description: "I/me (type: tooi)" },
    { target: "bạn", description: "You/friend (type: banj)" },
    { target: "đẹp", description: "Beautiful (type: ddej)" },
    { target: "được", description: "Can/to be (type: dduowcj)" },
    { target: "không", description: "No/not (type: khoong)" },
    { target: "rất", description: "Very (type: raats)" },
    { target: "hôm nay", description: "Today (type: hoom nay)" },
    { target: "ngày mai", description: "Tomorrow (type: ngafy mai)" },
    { target: "yêu", description: "Love (type: yeeu)" },
    { target: "thương", description: "Love/miss (type: thuowng)" },
    { target: "nhà", description: "House (type: nhaf)" },
    { target: "trường", description: "School (type: truowfng)" },
    { target: "học", description: "Study (type: hocj)" },
    { target: "làm", description: "Do/work (type: lafm)" },
    { target: "ăn", description: "Eat (type: awn)" },
    { target: "uống", description: "Drink (type: uoosng)" }
  ],
  
  advanced: [
    // Full sentences
    { target: "Xin chào bạn", description: "Hello, friend" },
    { target: "Cảm ơn bạn rất nhiều", description: "Thank you very much" },
    { target: "Tôi yêu Việt Nam", description: "I love Vietnam" },
    { target: "Chúc mừng năm mới", description: "Happy New Year" },
    { target: "Hôm nay trời đẹp quá", description: "The weather is beautiful today" },
    { target: "Bạn khỏe không?", description: "How are you?" },
    { target: "Tôi học tiếng Việt", description: "I study Vietnamese" },
    { target: "Rất vui được gặp bạn", description: "Nice to meet you" },
    { target: "Hẹn gặp lại", description: "See you again" },
    { target: "Chúc ngủ ngon", description: "Good night" },
    { target: "Tôi đang học gõ tiếng Việt", description: "I'm learning to type Vietnamese" },
    { target: "Việt Nam là đất nước tuyệt vời", description: "Vietnam is a wonderful country" },
    { target: "Món ăn Việt Nam rất ngon", description: "Vietnamese food is delicious" },
    { target: "Tôi muốn đi du lịch", description: "I want to travel" },
    { target: "Gia đình tôi sống ở Hà Nội", description: "My family lives in Hanoi" }
  ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = exercises;
}
