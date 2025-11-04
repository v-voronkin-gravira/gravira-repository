(function() {
    const T = {
        en: {
            msg1: "ACCESS DENIED️",
            msg2: "Looks like Gravira isn’t available in your region right now.",
            msg3: "Due to our intergalactic gaming license 🌍 (yes, we take rules seriously), we’re unable to offer access\n" +
                "    from your current location.",
            msg4: "If you believe this is a mistake, or just want to say hi, feel free to drop us a line.",
            msg5: "💬 Need help? Contact our",
            msg6: "🛸 Using a VPN?",
            msg7: 'We’re cool with that 😎 — just note that depending on your setup, things\n' +
                '    might not always run smoothly.',
            msg8: '✨ Thanks for flying with Gravira. Until next time — safe travels!',
            chat: 'live chat',
        },
        'fr-CA': {
            msg1: "403 ACCÈS REFUSÉ",
            msg2: "On dirait que Gravira n’est pas disponible dans votre région en ce moment.",
            msg3: "En raison de notre licence de jeu intergalactique 🌍 (oui, on prend la réglementation au sérieux), nous ne pouvons pas offrir l’accès depuis votre emplacement actuel.",
            msg4: "Si vous pensez qu’il s’agit d’une erreur, ou si vous voulez simplement nous dire bonjour, n’hésitez pas\n" +
                "    à nous écrire.",
            msg5: "💬 Besoin d’aide ? Contactez-nous par clavardage",
            msg6: "🛸 Vous utilisez un VPN ?",
            msg7: 'Ça nous va 😎 — sachez toutefois qu’en fonction de votre configuration, tout\n' +
                '    pourrait ne pas toujours fonctionner rondement.',
            msg8: '✨ Merci d’avoir voyagé avec Gravira. À la prochaine — bon voyage !',
            chat: 'n\n' +
                '    direct',
        }
    };

    const raw = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    const key = raw.startsWith("fr") ? "fr-CA" : "en";
    document.documentElement.lang = key;

    const d = T[key],
        g = id => document.getElementById(id);

    g("msg1") && (g("msg1").textContent = d.msg1);
    g("msg2") && (g("msg2").innerHTML = d.msg2);
    g("msg3") && (g("msg3").textContent = d.msg3);
    g("msg4") && (g("msg4").textContent = d.msg4);
    g("msg5") && (g("msg5").innerText = d.msg5);
    g("msg6") && (g("msg6").innerHTML = d.msg6);
    g("msg7") && (g("msg7").innerHTML = d.msg7);
    g("msg8") && (g("msg8").innerHTML = d.msg8);
    g("chat") && (g("chat").innerHTML = d.chat);
})();