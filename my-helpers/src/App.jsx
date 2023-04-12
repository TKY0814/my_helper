import React, { useState } from "react";
import "./App.css";

function ChatBot() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("こんにちは、どのようにお手伝いできますか？");
  const [options, setOptions] = useState([
    {
      value: "option1",
      label: "お金に困っています",
    },
    {
      value: "option2",
      label: "人間関係に困っています",
    },
    {
      value: "option3",
      label: "元気が出なくて困っています",
    },
  ]);

  const handleClick = (event) => {
    if (event.target.value === "option1") {
      setOutput("お金の何に困っていますか？");
      setOptions([
        {
          value: "subOption1",
          label: "生活費が高い",
        },
        {
          value: "subOption2",
          label: "所得を増やしたい",
        },
      ]);
    } else if (event.target.value === "option2") {
      setOutput("人間関係の何に困っていますか？");
      setOptions([{
        value: "subOption3",
        label: "苦手な人がいる",
      },
      {
        value: "subOption4",
        label: "仲良くなりたい人がいる",
      },]);
    } else if (event.target.value === "option3") {
      setOutput("なぜ元気が出ませんか？");
      setOptions([{
        value: "subOption5",
        label: "精神的に不安です",
      },
      {
        value: "subOption6",
        label: "不健康です",
      },]);
    } else if (event.target.value === "subOption1") {
      setOutput("生活費の何が高いですか？");
      setOptions([
        {
          value: "subOption1-1",
          label: "光熱費",
        },
        {
          value: "subOption1-2",
          label: "食費",
        },
      ]);
    } else if (event.target.value === "subOption2") {
      setOutput(<a href="https://example.com">所得を増やしたい方には〇〇がおすすめです。文章をクリックしておすすめのサイトを参考にしてみてください。</a>);
      setOptions([]);
    }else if (event.target.value === "subOption3") {
      setOutput(<a href="https://example.com">苦手な人がいる方には〇〇がおすすめです。文章をクリックしておすすめのサイトを参考にしてみてください。</a>);
        setOptions([]);
    }else if (event.target.value === "subOption4") {
      setOutput(<a href="https://example.com">仲良くなりたい人がいる方には〇〇がおすすめです。文章をクリックしておすすめのサイトを参考にしてみてください。</a>);
        setOptions([]);
    } else if (event.target.value === "subOption1-1") {
      setOutput(<a href="https://example.com">光熱費を抑えるには〇〇がおすすめです。文章をクリックしておすすめのサイトを参考にしてみてください。</a>);
      setOptions([]);
    } else if (event.target.value === "subOption1-2") {
      setOutput(<a href="https://example.com">食費を抑えるには〇〇がおすすめです。文章をクリックしておすすめのサイトを参考にしてみてください。</a>);
      setOptions([]);
    }
  };

  return (
    <div className="chat-bot">
      <div className="output">{output}</div>
      <div className="options">
        {options.map((option) => (
          <button key={option.value} value={option.value} onClick={handleClick}>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ChatBot;
