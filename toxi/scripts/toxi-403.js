(function() {
    const T = {
        en: {
            msg1: "ACCESS DENIED️",
            msg2: "Looks like Toxi Casino isn’t available in your region right now.",
            msg3: "Due to licensing and regulatory requirements, we can’t provide access from your current location.",
            msg4: "Think this is a mistake or need help?",
            msg5: "🌎 Using a VPN?",
            msg6: "That’s okay — just note your setup may affect stability.",
            msg7: '⚡ Thanks for checking in with the TOXIС ZONE.',
            msg8: 'Until next time — stay charged and play safe! 💚',
            chat: 'Chat with us live 💬',
        },
        de: {
            msg1: "ZUGRIFF VERWEIGERT",
            msg2: "Anscheinend ist Toxi Casino in Ihrer Region derzeit nicht verfügbar.",
            msg3: "Aufgrund von Lizenz- und behördlichen Vorgaben können wir von Ihrem aktuellen Standort aus keinen\n" +
                "    Zugriff gewähren.",
            msg4: "Denken Sie, das ist ein Fehler, oder brauchen Sie Hilfe?",
            msg5: "🌎 Verwenden Sie ein VPN?",
            msg6: "Das ist in Ordnung – beachten Sie nur, dass Ihre Konfiguration die Stabilität beeinträchtigen kann.",
            msg7: '⚡ Danke für Ihren Besuch in der TOXIC ZONE.',
            msg8: 'Bis zum nächsten Mal – bleiben Sie geladen und spielen Sie sicher! 💚',
            chat: 'Chatten Sie mit uns im Live-Chat 💬',
        }
    };

    const raw = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    const key = raw.startsWith("de") ? "de" : "en";
    document.documentElement.lang = key;

    const d = T[key],
        g = id => document.getElementById(id);
    g("msg1") && (g("msg1").textContent = d.msg1);
    g("msg2") && (g("msg2").innerHTML = d.msg2);
    g("msg3") && (g("msg3").textContent = d.msg3);
    g("msg4") && (g("msg4").textContent = d.msg4);
    g("msg5") && (g("msg5").textContent = d.msg5);
    g("msg6") && (g("msg6").innerHTML = d.msg6);
    g("msg7") && (g("msg7").innerHTML = d.msg7);
    g("msg8") && (g("msg8").innerHTML = d.msg8);
    g("chat") && (g("chat").innerHTML = d.chat);
    console.log(g('msg1'));
})();